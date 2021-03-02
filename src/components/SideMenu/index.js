import React, { useEffect, useState } from 'react';

import { Container } from './styles';

const scrollTreshold = 300;

function SideMenu({ children }) {

    const [scrollY, setScrollY] = useState(0);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {

        function onScroll() {
            setScrollY(window.scrollY);
            console.log(window.scrollY)
            setIsActive(false);
        }

        window.addEventListener('scroll', onScroll)

        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const classes = [
        isActive ? 'open' : '',
        scrollY <= scrollTreshold ? 'scrollOpen' : '',
    ];

    const className = classes.join(' ').trim();

    function toggleActiveMenu() {
        setIsActive(prev => !prev);
    }

    window.toggleActiveMenu = toggleActiveMenu;

    return <Container className={className}>
        {children}
    </Container>;
}

export default SideMenu;