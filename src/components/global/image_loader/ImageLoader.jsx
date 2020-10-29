import React, { useState } from 'react';

const ImageLoader = ({ lowQualitySrc, highQualitySrc, alt, styles = {} }) => {

    const [loaded, setLoaded] = useState(false);

    const preLoadedStyles = {
        height: '100%',
        width: '100%',
        display: 'none',
    }
    const loadedStyles = {
        height: '100%',
        width: '100%'
    }

    return (
        <div style={{ position: 'relative', height: '100%', width: '100%' }}>
            <img
                src={lowQualitySrc}
                alt={alt}
                style={!loaded ? { ...loadedStyles, ...styles } : preLoadedStyles}
            />

            <img
                src={highQualitySrc}
                alt={alt}
                style={!loaded ? preLoadedStyles : { ...loadedStyles, ...styles }}
                onLoad={setLoaded.bind(null, true)}
            />
        </div>
    )
}

export default ImageLoader;
