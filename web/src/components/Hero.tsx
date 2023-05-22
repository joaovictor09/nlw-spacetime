// 'use client'

import Image from 'next/image'
import nlwLogo from '../assets/nlw-spacetime-logo.svg'
import Link from 'next/link'
import { useSelectedLayoutSegments } from 'next/navigation'
import { api } from '@/lib/api'
import { useEffect, useState } from 'react'

export async function Hero() {
  // const segments = useSelectedLayoutSegments()
  // const [user, setUser] = useState<null | string>(null)

  // const isInPublicUserMemoriesRoute = segments.includes('user')

  // async function getUserName() {
  //   const response = await api.get(`user/${segments[2]}`)
  //   setUser(response.data.userId)
  //   console.log(user)
  // }

  // useEffect(() => {
  //   if (isInPublicUserMemoriesRoute) {
  //     getUserName()
  //   }
  // }, [])

  return (
    <div className="space-y-5">
      <Image src={nlwLogo} alt="NLW Spacetime" />

      <div className="max-w-[420px] space-y-1">
        <h1 className="text-5xl font-bold leading-tight text-gray-50">
          {/* {user ? `Cápsula do tempo de ${user}` : 'Sua cápsula do tempo'} */}
          Sua cápsula do tempo
        </h1>
        <p className="text-lg leading-relaxed">
          Colecione momentos marcantes da sua jornada e compartilhe (se quiser)
          com o mundo!
        </p>
      </div>

      <Link
        className="inline-block rounded-full bg-green-500 px-5 py-3 font-alt text-sm uppercase leading-none text-black transition-colors hover:bg-green-600"
        href="/memories/new"
      >
        CADASTRAR LEMBRANÇA
      </Link>
    </div>
  )
}
