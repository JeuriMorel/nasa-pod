function Card() {
    return (
        <>
            <article className="flow">
                <p className="title">{title}</p>
                <p className="subtitle">{formattedDate}</p>
                <img src={imgSrc} alt="" />
                <p className="explanation">{explanation}</p>

                {copyright && (
                    <p className="copyright">Copyright: {copyright}</p>
                )}
            </article>
        </>
    )
}

export default Card
const formatter = new Intl.DateTimeFormat("en-us", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: 'GMT'
})

const title = "Comet ZTF  over Yosemite Falls"
const date = new Date("2023-02-21")
console.log(date)
const formattedDate = formatter.format(date)
const imgSrc =
    "https://apod.nasa.gov/apod/image/2302/CometZtfYosemite_Mostofi_960.jpg"
const explanation =
    "They are both falling. The water in Yosemite Falls, California, USA, is falling toward the Earth. Comet ZTF is falling toward the Sun. This double cosmic cascade was captured late last month as fading Comet C/2022 E3 (ZTF) had just passed its closest to planet Earth. The orange star just over the falls is Kochab. With the exception of a brief encounter with a black bear, the featured image was a well-planned composite of a moonlit-foreground and long-duration background exposures - all designed to reconstruct a deep version of an actual single sight. Although Comet ZTF is now fading as it glides back to the outer Solar System, its path is determined by gravity and so it can be considered to still be falling toward the Sun -- but backwards.    Comet ZTF Gallery: Notable Submissions to APOD"

const copyright = "Tara Mostofi"

/*
{"copyright":"Tara Mostofi",
"date": "2023-02-21", 

"explanation": "They are both falling. The water in Yosemite Falls, California, USA, is falling toward the Earth. Comet ZTF is falling toward the Sun. This double cosmic cascade was captured late last month as fading Comet C/2022 E3 (ZTF) had just passed its closest to planet Earth. The orange star just over the falls is Kochab. With the exception of a brief encounter with a black bear, the featured image was a well-planned composite of a moonlit-foreground and long-duration background exposures - all designed to reconstruct a deep version of an actual single sight. Although Comet ZTF is now fading as it glides back to the outer Solar System, its path is determined by gravity and so it can be considered to still be falling toward the Sun -- but backwards.    Comet ZTF Gallery: Notable Submissions to APOD", 

"hdurl": "https://apod.nasa.gov/apod/image/2302/CometZtfYosemite_Mostofi_1639.jpg", 
"media_type": "image", 
"service_version": "v1", 
"title": "Comet ZTF  over Yosemite Falls", 
"url": "https://apod.nasa.gov/apod/image/2302/CometZtfYosemite_Mostofi_960.jpg"}*/

/*media_type can be image or video*/
