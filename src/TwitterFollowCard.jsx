import "./TwitterFollowCard.css"
import { useState } from "react"

export function TwitterFollowCard({ children="unknow" , username="unknow", initialIsFollowing }){

    const [isFollowing, setisfollowing] = useState(initialIsFollowing)

    const text = false === isFollowing? "Seguir" : "Siguiendo"
    const buttonClassName = isFollowing ? "tw-followCard-btn-seguir is-following": "tw-followCard-btn-seguir"

    const handleclick = () => {
        setisfollowing(!isFollowing)
    }

    return(
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img 
                    className="tw-followCard-avatar"
                    alt="img de perfil"
                    src={ `https://unavatar.io/${username}` }
                />
                <div className="tw-followCard-div">
                    <strong className="tw-followCard-name">{ children }</strong>
                    <span className="tw-followCard-tagName">@{ username }</span>
                </div>
            </header>
            <aside className="tw-followCard-aside">
                <button className={ buttonClassName } onClick={handleclick} >
                    <span className="tw-followCard-follow">{ text }</span>
                    <span className="tw-followCard-stopFollow">Dejar de Seguir</span>       
                </button>
            </aside>
        </article>
    )
}