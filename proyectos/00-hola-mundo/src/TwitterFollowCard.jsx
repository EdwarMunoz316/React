import { useState } from 'react'

export function TwitterFollowCard({ formatUserName, userName, name, isFollowingInitial }) {
    const [isFollowing, setIsFollowing] = useState(isFollowingInitial);

    const text = isFollowing ? 'Siguiendo' : 'Seguir';
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button';

    const handleClick = () => {
        setIsFollowing(!isFollowing);
    }

    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img
                    src={`https://unavatar.io/${userName}`}
                    alt="Avatar 1"
                    className='tw-followCard-avatar'
                />
                <div className='tw-followCard-info'>
                    <strong>{name}</strong>
                    <span className='tw-followCard-infoUser'>{formatUserName(userName)}</span>
                </div>
            </header>

            <aside>
                <button onClick={() => handleClick()} className={buttonClassName}>
                <span className='tw-followCard-text'>{text}</span>
                    <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}