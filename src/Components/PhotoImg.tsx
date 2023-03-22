import { MouseEventHandler } from "react"

interface PhotoImgProps {
    smallImgSrc: string
    largeImgSrc: string
    className?: string
    onClick?: MouseEventHandler<HTMLImageElement>
    isSmallImg?: boolean
}

function PhotoImg({ smallImgSrc, largeImgSrc, className, onClick, isSmallImg }: PhotoImgProps) {
    return (
        <picture>
            <source media="(min-width: 600px)" srcSet={largeImgSrc} sizes="" />
            <img src={smallImgSrc} alt="" className={className} onClick={onClick} width={ isSmallImg ? "500px" : undefined} />
        </picture>
    )
}

export default PhotoImg
