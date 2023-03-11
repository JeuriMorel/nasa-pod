import PhotoImg from "./PhotoImg"

interface PhotoWrapperProps {
    explanation: string
    title: string
    copyright: string | null
    url: string
    hdurl: string
    media_type: string
    thumbnail_url: string
}

function PhotoWrapper({
    explanation,
    title,
    copyright = null,
    hdurl,
    media_type,
    url,
    thumbnail_url,
}: PhotoWrapperProps) {
    if (media_type == "video") console.log("this is a video")
    return (
        <>
            <article>
                {media_type == "image" && (
                    <PhotoImg smallImgSrc={url} largeImgSrc={hdurl} />
                )}
                {media_type == "video" && (
                    <PhotoImg
                        smallImgSrc={thumbnail_url}
                        largeImgSrc={thumbnail_url}
                    />
                )}
                <div className="text-container">
                    <h1 className="title">{title && title.replace("Credit:", '')}</h1>
                    <p className="explanation">{explanation}</p>

                    {copyright && (
                        <p className="copyright">Copyright: {copyright}</p>
                    )}
                </div>
            </article>
        </>
    )
}

export default PhotoWrapper

// const title = "Crescent Moon Occultation"

// const largeImgSrc =
//     "https://apod.nasa.gov/apod/image/2302/JupiterOccultationFefoBouvier.jpg"
// const smallImgSrc =
//     "https://apod.nasa.gov/apod/image/2302/JupiterOccultationFefoBouvier1024.jpg"
// const explanation =
//     "On February 22, a young Moon shared the western sky at sunset with bright planets Venus and Jupiter along the ecliptic plane. The beautiful celestial conjunction was visible around planet Earth. But from some locations Jupiter hid for a while, occulted by the crescent lunar disk. The Solar System's ruling gas giant was captured here just before it disappeared behind the the Moon's dark edge, seen over the R\u00edo de la Plata at Colonia del Sacramento, Uruguay.  In the serene river and skyscape Venus is not so shy, shining brightly closer to the horizon through the fading twilight. Next week Venus and Jupiter will appear even closer in your evening sky."

// const copyright = "Tara Mostofi"
// const media_type = "image"

/*
{"copyright":"Tara Mostofi",
"date": "2023-02-21", 

"explanation": "They are both falling. The water in Yosemite Falls, California, USA, is falling toward the Earth. Comet ZTF is falling toward the Sun. This double cosmic cascade was captured late last month as fading Comet C/2022 E3 (ZTF) had just passed its closest to planet Earth. The orange star just over the falls is Kochab. With the exception of a brief encounter with a black bear, the featured image was a well-planned composite of a moonlit-foreground and long-duration background exposures - all designed to reconstruct a deep version of an actual single sight. Although Comet ZTF is now fading as it glides back to the outer Solar System, its path is determined by gravity and so it can be considered to still be falling toward the Sun -- but backwards.    Comet ZTF Gallery: Notable Submissions to APOD", 

"hdurl": "https://apod.nasa.gov/apod/image/2302/CometZtfYosemite_Mostofi_1639.jpg", 
"media_type": "image", 
"service_version": "v1", 
"title": "Comet ZTF  over Yosemite Falls", 
"url": "https://apod.nasa.gov/apod/image/2302/CometZtfYosemite_Mostofi_960.jpg"}*/

/* {"copyright":"Fefo Bouvier","date":"2023-02-25",

"explanation": "On February 22, a young Moon shared the western sky at sunset with bright planets Venus and Jupiter along the ecliptic plane. The beautiful celestial conjunction was visible around planet Earth. But from some locations Jupiter hid for a while, occulted by the crescent lunar disk. The Solar System's ruling gas giant was captured here just before it disappeared behind the the Moon's dark edge, seen over the R\u00edo de la Plata at Colonia del Sacramento, Uruguay.  In the serene river and skyscape Venus is not so shy, shining brightly closer to the horizon through the fading twilight. Next week Venus and Jupiter will appear even closer in your evening sky.",

"hdurl": "https://apod.nasa.gov/apod/image/2302/JupiterOccultationFefoBouvier.jpg", 
"media_type": "image", "service_version": "v1", "title": "Crescent Moon Occultation", "url": "https://apod.nasa.gov/apod/image/2302/JupiterOccultationFefoBouvier1024.jpg"}*/

/*media_type can be image or video*/
