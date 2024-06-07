import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {
    const format = (userName) => `@${userName}`

    const users = [
        {
            userName: '2',
            name: 'Edwar Sneider Muñoz',
            isFollowingInitial: true
        },
        {
            userName: '1',
            name: 'Jefferson David Sevillano',
            isFollowingInitial: false
        },
        {
            userName: '8',
            name: 'Zharith',
            isFollowingInitial: true
        },
    ]

    return (
        <section className='app'>
            {users.map(({ userName, name, isFollowingInitial }) => (
                    <TwitterFollowCard
                        key={userName}
                        formatUserName={format}
                        userName={userName}
                        name={name}
                        isFollowingInitial={isFollowingInitial}
                    />
                )
            )}
        </section>
    )
}