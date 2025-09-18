declare namespace image {
    //% shim=ImageMethods::blit block="blit %xDst %yDst %wDst %hDst %src=screen_image_picker %xSrc %ySrc %wSrc %hSrc %transparent=toggleOnOff %check=toggleOnOff"
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