import React from 'react';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer>
            <Image
                src='/images/div.png' // Route of the image file
                width='180'
                height='63'
                alt=''
            />

            <a href="mailto:janeausten.live3@gmail.com">
                <Image
                    src='/images/mailicon.png' // Route of the image file
                    width='40'
                    height='40'
                    alt=''
                />
            </a>
            <p>
                Copyright © 2021-2023 janeausten.live – All Rights Reserved.
            </p>
        </footer>
    )
}

export default Footer