import React from 'react'
import HeaderBox from '@/components/ui/HeaderBox'
import TotalBalanceBox from '@/components/ui/TotalBalanceBox'
import RightSidebar from '@/components/ui/RightSidebar'

type Props = {}

const Home = (props: Props) => {

    const loggedIn = { 
        firstName: 'Devon', 
        lastName: 'Fennell',
        email: 'contact@devonfennell.com'
    };

  return (
    <section className='home'>
        <div className="home-content">
            <header className='home-header'>
               <HeaderBox 
                type='greeting'
                title='Welcome'
                user={loggedIn?.firstName || 'Guest'}
                subtext='Access and manage your account and transactions effectively'
               />
            <TotalBalanceBox
                accounts={[]}
                totalBanks={1}
                totalCurrentBalance={1250.35}
                />
            </header>
            RECENT TRANSACTIONS

        </div>
        <RightSidebar 
            user={loggedIn}
            transactions={[]}
            banks={[
                { currentBalance: 123.15 }, 
                { currentBalance: 123.15 },
            ]}
        />
    </section>
  )
}

export default Home