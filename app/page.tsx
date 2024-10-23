import { Metadata } from 'next'
import Image from 'next/image'
import { Github, Globe, Mail, MapPin } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const GITHUB_USERNAME = 'victorradael'

export const metadata: Metadata = {
  title: 'Perfil de Engenheiro de Software',
  description: 'Página de apresentação baseada no perfil do GitHub',
}

async function getGithubProfile() {
  try {
    const res = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`, { next: { revalidate: 3600 } })
    if (!res.ok) throw new Error('Failed to fetch profile')
    return res.json()
  } catch (error) {
    console.error('Error fetching GitHub profile:', error)
    return {}
  }
}

async function getGithubRepos() {
  try {
    const res = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=stars&per_page=5`, { next: { revalidate: 3600 } })
    if (!res.ok) throw new Error('Failed to fetch repos')
    return res.json()
  } catch (error) {
    console.error('Error fetching GitHub repos:', error)
    return []
  }
}

export default async function ProfilePage() {
  const profile = await getGithubProfile()
  const repos = await getGithubRepos()

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate p-4">
      <Card className="w-full max-w-4xl mx-auto bg-deep-black border-light-blue opacity-85">
        <CardHeader className="border-b border-light-blue">
          <div className="flex flex-col md:flex-row items-center gap-6">        
              <Image
                src={profile.avatar_url || '/placeholder.svg?height=150&width=150'}
                alt={profile.name || 'Profile Picture'}
                width={150}
                height={150}
                className="rounded-full border-4 border-sky-blue"
                priority
              />
            <div className="text-center md:text-left">
              <CardTitle className="text-3xl mb-2 text-sky-blue">{profile.name}</CardTitle>
              <CardDescription className="text-lg mb-2 text-pale-blue">{profile.bio}</CardDescription>
              <div className="flex items-center justify-center md:justify-start gap-2 text-light-blue">
                <MapPin className="w-4 h-4" />
                <span>{profile.location}</span>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-sky-blue">Estatísticas</h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className='text-pale-blue'>Repositórios Públicos</span>
                  <Badge variant="secondary" className="bg-navy text-sky-blue">{profile.public_repos}</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className='text-pale-blue'>Seguidores</span>
                  <Badge variant="secondary" className="bg-navy text-sky-blue">{profile.followers}</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className='text-pale-blue'>Seguindo</span>
                  <Badge variant="secondary" className="bg-navy text-sky-blue">{profile.following}</Badge>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-sky-blue">Contato</h3>
              <div className="flex flex-wrap gap-2">
                <Button variant="outline" size="sm" asChild className="bg-royal-blue text-pale-blue hover:bg-sky-blue hover:text-deep-black">
                  <a href={profile.html_url} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" /> GitHub
                  </a>
                </Button>
                {profile.blog && (
                  <Button variant="outline" size="sm" asChild className="bg-royal-blue text-pale-blue hover:bg-sky-blue hover:text-deep-black">
                    <a href={profile.blog} target="_blank" rel="noopener noreferrer">
                      <Globe className="mr-2 h-4 w-4" /> Website
                    </a>
                  </Button>
                )}
                {profile.email && (
                  <Button variant="outline" size="sm" asChild className="bg-royal-blue text-pale-blue hover:bg-sky-blue hover:text-deep-black">
                    <a href={`mailto:${profile.email}`}>
                      <Mail className="mr-2 h-4 w-4" /> Email
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3 text-sky-blue">Repositórios Recentes</h3>
            <div className="space-y-4">
              {Array.isArray(repos) && repos.length > 0 ? (
                repos.map((repo: any) => (
                  <Card key={repo.id} className="bg-charcoal border-light-blue">
                    <CardHeader>
                      <CardTitle className="text-sky-blue">{repo.name}</CardTitle>
                      <CardDescription className="text-pale-blue">{repo.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between items-center">
                        <div className="flex gap-2">
                          <Badge className="bg-navy text-sky-blue">{repo.language}</Badge>
                          <span className="text-sm text-light-blue">⭐ {repo.stargazers_count}</span>
                          <span className="text-sm text-light-blue">🍴 {repo.forks_count}</span>
                        </div>
                        <Button variant="outline" size="sm" asChild className="bg-royal-blue text-pale-blue hover:bg-sky-blue hover:text-deep-black">
                          <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                            Ver Projeto
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <Card className="bg-slate border-navy">
                  <CardContent>
                    <p className="text-pale-blue">Nenhum repositório encontrado ou ocorreu um erro ao buscar os repositórios.</p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}