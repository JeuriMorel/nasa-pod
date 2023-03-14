type PhotoVideoProps = {
  source: string
}

function PhotoVideo({source}: PhotoVideoProps) {
  return (
    <iframe width="560" height="315" src={source} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
  )
}

export default PhotoVideo