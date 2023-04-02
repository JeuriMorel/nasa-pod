import Skeleton from "./Skeleton"

function Loader() {
    return (
        <article className="flow flow-flexible">
            <Skeleton classes="skeleton-img" />
            <div className="text-container flow">
                <Skeleton classes="skeleton-title" />
                <Skeleton classes="skeleton-title" />
                <Skeleton classes="skeleton-copyright" />
            </div>
            <div className="skeleton-explanation-container flow explanation">
                <Skeleton classes="skeleton-explanation" />
                <Skeleton classes="skeleton-explanation" />
                <Skeleton classes="skeleton-explanation" />
                <Skeleton classes="skeleton-explanation" />
                <Skeleton classes="skeleton-explanation" />
                
            </div>
        </article>
    )
}

export default Loader
