import { Card, CardHeader, CardDescription } from '@/components/ui/card'
import { DolfimLogo } from '@/components/ui/dolfimLogo'
import Link from 'next/link'

const apps = [
    { name: 'DOLFIM', path: '/applications', description: 'EM BREVE: DOLFIM Otimiza Levantamento e Foco em Intensidade e Medidas', logo: DolfimLogo }
]

export default function Apps() {
    return (
        <div className='grid grid-cols-4 gap-8 m-16'>
            {apps.map(app => (
                <Link key={app.name} href={app.path} passHref>
                    <div className="relative group">

                        <Card className='justify-center center bg-navy border-light-blue p-4'>

                            <app.logo className='w-40 mb-4' fill='#5dade2 ' />

                            <CardDescription className='text-light-blue'>{app.description}</CardDescription>
                        </Card>
                    </div>
                </Link>
            ))}
        </div>
    )
}
