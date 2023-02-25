type PhotoImgProps ={
    smallImgSrc: string
    largeImgSrc: string
}


function PhotoImg({smallImgSrc, largeImgSrc}: PhotoImgProps) {
  return (
    <picture>
                    <source
                        media="(min-width: 600px)"
                        srcSet={largeImgSrc}
                        sizes=""
                    />
                    <img src={smallImgSrc} alt="" />
                </picture>
  )
}

export default PhotoImg