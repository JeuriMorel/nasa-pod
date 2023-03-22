import { MouseEventHandler } from "react"

interface PhotoImgProps {
    smallImgSrc: string
    largeImgSrc: string
    className?: string
    onClick?: MouseEventHandler<HTMLImageElement>
}

function PhotoImg({ smallImgSrc, largeImgSrc, className, onClick }: PhotoImgProps) {
    return (
        <picture>
            <source media="(min-width: 600px)" srcSet={largeImgSrc} sizes="" />
            <img src={smallImgSrc} alt="" className={className} onClick={ onClick} />
        </picture>
    )
}

export default PhotoImg
