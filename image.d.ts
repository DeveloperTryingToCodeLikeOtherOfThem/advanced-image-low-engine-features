declare namespace image {
    //% shim=ImageMethods::blit block="blit"
    function blit(
        xDst: number,
        yDst: number,
        wDst: number,
        hDst: number,
        src: Image,
        xSrc: number,
        ySrc: number,
        wSrc: number,
        hSrc: number,
        transparent: boolean,
        check: boolean
    ): boolean
}