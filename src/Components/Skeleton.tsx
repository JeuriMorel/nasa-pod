interface SkeletonProps{
    classes: string
}

function Skeleton({ classes }: SkeletonProps) {
    return (
    <div className={`skeleton ${classes}`}></div>
  )
}

export default Skeleton