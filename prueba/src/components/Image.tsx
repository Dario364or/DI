interface ImageData{
    src:string,
    alt:string,
    width:number,
    height:number
    
}
function Image(){

    let image:ImageData = {
        src : 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/250px-Cat_November_2010-1a.jpg ',
        alt : 'Texto Descriptivo',
        width:200,
        height:500
    }

    return <img src={image.src} alt={image.alt} width={image.width} height={image.height}/>
}

export default Image;