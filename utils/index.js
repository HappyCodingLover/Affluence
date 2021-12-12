export function getCartTotal(items) {
    let total = 0;
    if (items) {
        for (let i = 0; i < items.length; i++) {
            total += parseInt(items[i].price * items[i].qty, 10);
        }
    }

    return total;
}

/**
 * Util for making parallax background
 */
export function setParallax() {
    let parallax = document.querySelector(".parallax");
    if (parallax) {
        let y = (parallax.offsetTop - window.pageYOffset) / 20 + 40;
        parallax.style.backgroundPositionY = `${y}%`;
    }
}
/**
 * function to scroll window screen
 */
export function scrollTopHandlder(e) {
    if (isEdgeBrowser() || isSafariBrowser()) {
        let pos = window.pageYOffset;
        let timer = setInterval(() => {
            if (pos <= 0)
                clearInterval(timer);
            window.scrollBy(0, -40);
            pos -= 40;
        }, 1);
    } else {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    e.preventDefault();
}

export function scrollTopInit() {
    if (document.querySelector("#scroll-top")) {
        if (window.pageYOffset > 600) {
            document.querySelector("#scroll-top").classList.add("fixed");
        } else {
            document.querySelector("#scroll-top").classList.remove("fixed");
        }
    }
}

/**
 * function to make header sticky
 */

export function stickyInit() {
    let stickyType = window.innerWidth > 991 ? '.desktop-sticky' : '.mobile-sticky';
    // Initialize
    let isSticky = document.querySelector('.sticky-header');
    if (isSticky && !isSticky.classList.contains('mobile-sticky') && !isSticky.classList.contains('desktop-sticky')) {
        stickyType = '';
    } else {
        if (window.innerWidth >= 992 && document.querySelector('.sticky-header.mobile-sticky.fixed')) {
            document.querySelector('.sticky-header.mobile-sticky').classList.remove('fixed');
            document.querySelector('.sticky-header.mobile-sticky').parentElement.classList.contains('sticky-wrapper') && document.querySelector('.sticky-header.mobile-sticky').parentElement.setAttribute('style', 'height: auto');

        } else if (window.innerWidth < 992 && document.querySelector('.sticky-header.desktop-sticky.fixed')) {
            document.querySelector('.sticky-header.desktop-sticky').classList.remove('fixed');
            document.querySelector('.sticky-header.desktop-sticky').parentElement.classList.contains('sticky-wrapper') && document.querySelector('.sticky-header.desktop-sticky').parentElement.setAttribute('style', 'height: auto');
        }
    }

    if (window.innerWidth >= 992 && document.querySelector('.main .sticky-header.mobile-sticky.fixed')) {
        document.querySelector('.main .sticky-header.mobile-sticky').classList.remove('fixed');
        document.querySelector('.main .sticky-header.mobile-sticky').parentElement.classList.contains('sticky-wrapper') && document.querySelector('.main .sticky-header.mobile-sticky').parentElement.setAttribute('style', 'height: auto');
    } else if (window.innerWidth < 992 && document.querySelector('.main .sticky-header.desktop-sticky.fixed')) {
        document.querySelector('.main .sticky-header.desktop-sticky').classList.remove('fixed');
        document.querySelector('.main .sticky-header.desktop-sticky').parentElement.classList.contains('sticky-wrapper') && document.querySelector('.sticky-header.desktop-sticky').parentElement.setAttribute('style', 'height: auto');
    }

    let stickyHeader1 = document.querySelector('.header .sticky-header' + stickyType);
    if (stickyHeader1) {
        let height = parseInt(stickyHeader1.offsetHeight) + parseInt(window.getComputedStyle(stickyHeader1).getPropertyValue('margin-top').slice(0, -2));
        stickyHeaderHandler(stickyHeader1, 0, height);
    }

    let stickyHeader2 = document.querySelector('.main .sticky-header' + stickyType);
    if (stickyHeader2) {
        let height = parseInt(stickyHeader2.offsetHeight) + parseInt(window.getComputedStyle(stickyHeader2).getPropertyValue('margin-bottom').slice(0, -2));

        if (window.innerWidth < 992 && stickyHeader2.classList.contains('mobile-sticky') || window.innerWidth >= 992 && stickyHeader2.classList.contains('desktop-sticky')) {
            if (stickyHeader1) {
                stickyHeaderHandler(stickyHeader2, stickyHeader1.offsetHeight, height);
            } else {
                stickyHeaderHandler(stickyHeader2, 0, height);
            }
        }
    }

    if (window.innerWidth <= 576 && document.querySelector('.sticky-navbar')) {
        if (window.scrollY >= 400) {
            document.querySelector('.sticky-navbar').classList.add('fixed');
        } else {
            document.querySelector('.sticky-navbar').classList.remove('fixed');
        }
    }

    if (window.innerWidth >= 992 && document.querySelector('body.mmenu-active')) {
        document.querySelector('body.mmenu-active').classList.remove('mmenu-active');
    }
}

export function stickyHeaderHandler(stickyHeader, offsetTop, height) {
    let top = 0;

    if (stickyHeader.parentElement.classList.contains('sticky-wrapper')) {
        top = window.pageYOffset + stickyHeader.parentElement.getBoundingClientRect().top + stickyHeader.parentElement.offsetHeight;
    } else {
        top = window.pageYOffset + stickyHeader.parentElement.getBoundingClientRect().top + stickyHeader.offsetHeight;
    }

    if (pageYOffset > top) {
        stickyHeader.classList.add('fixed');

        if (!stickyHeader.parentElement.classList.contains('sticky-wrapper')) {
            let wrapper = document.createElement('div');
            wrapper.className = 'sticky-wrapper';
            stickyHeader.parentElement.insertBefore(wrapper, stickyHeader);
            wrapper.insertAdjacentElement('beforeend', stickyHeader);
        }

        if (!stickyHeader.parentElement.getAttribute("style") && stickyHeader.parentElement.classList.contains('sticky-wrapper')) {
            stickyHeader.parentElement.setAttribute('style', 'height:' + height + 'px');
        }

        if (stickyHeader.classList.contains('sticky-cart') || stickyHeader.classList.contains('toolbox')) {
            stickyHeader.setAttribute('style', 'top:' + offsetTop + 'px');
        }
    } else {
        stickyHeader.classList.remove('fixed');

        if (stickyHeader.parentElement.getAttribute("style")) {
            stickyHeader.parentElement.removeAttribute('style');
        }

        if (stickyHeader.classList.contains('sticky-cart') || stickyHeader.classList.contains('toolbox')) {
            stickyHeader.removeAttribute('style');
        }
    }
}

/**
 * Is Firefox Explorer?
 * @return { bool }
 */
export const isFirefoxBrowser = function () {
    let sUsrAg = navigator.userAgent;
    if (sUsrAg.indexOf("Firefox") > -1)
        return true;
    return false;
}

/**
 * function to detect safari browser
 * @return {bool}
 */
export const isSafariBrowser = function () {
    let sUsrAg = navigator.userAgent;
    if (sUsrAg.indexOf('Safari') !== -1 && sUsrAg.indexOf('Chrome') === -1)
        return true;
    return false;
}

/**
 * function to detect Edge browser
 * @return {bool}
 */
export const isEdgeBrowser = function () {
    let sUsrAg = navigator.userAgent;
    if (sUsrAg.indexOf("Edge") > -1)
        return true;
    return false;
}

// controll count dom
export const countTo = function () {
    let items = document.querySelectorAll('.count-to');

    if (items) {
        for (let i = 0; i < items.length; i++) {

            let item = items[i];
            let amount = parseInt(item.getAttribute('data-to'), 10) - parseInt(item.getAttribute('data-from'), 10);
            let time = parseInt(item.getAttribute('data-speed'), 10);
            let interval = parseInt(item.getAttribute('data-refresh-interval'), 10);
            let pt = 0;
            let height = item.parentElement.parentElement.parentElement.offsetTop;
            let flag = 0;

            document.addEventListener("scroll", countToScrollHandler, false);

            function countToScrollHandler() {
                if (pt <= time && height >= window.pageYOffset) {
                    if (0 === flag) {
                        let timerId = setInterval(() => {
                            if (pt >= time) {
                                clearInterval(timerId);
                            }

                            item.innerHTML = parseInt((pt * amount) / time);
                            pt = pt + interval;
                        }, interval);
                    }

                    flag = 1;
                }
            }
        }
    }
}

export const unionArray = function ( arry1, arry2 ) {
    let arry = arry1
    for (var arry_index = 0; arry_index < arry2.length; arry_index++) {
        if (arry1.indexOf( arry2[arry_index] ) == -1) arry.push(arry2[arry_index])
    }
    return arry
}

/* Data Util Functions */
const { users } = require('./data/users')
const { artworks } = require('./data/artworks')
const { priceFilters } = require('./data/price-filter')
const { activities } = require('./data/activities')

export const getArtworks = function ( ) {
    return artworks
}

export const getArtwork = function ( slug ) {
    let artwork = null
    for (let artwork_index = 0; artwork_index < artworks.length; artwork_index++) {
        if (artworks[artwork_index].slug == slug) artwork = artworks[artwork_index]
    }
    return artwork
}

export const getOnSaleArtworks = function ( user ) {
    let onsaleArtworks = []
    for (let artwork_index = 0; artwork_index < artworks.length; artwork_index++) {
        if (artworks[artwork_index].status == 'on_sale' && artworks[artwork_index].owned_by == user) onsaleArtworks.push( artworks[artwork_index] )
    }
    return onsaleArtworks
}

export const getOwnedArtworks = function ( user ) {
    let ownedArtworks = []
    for (let artwork_index = 0; artwork_index < artworks.length; artwork_index++) {
        if (artworks[artwork_index].owned_by == user) ownedArtworks.push( artworks[artwork_index] )
    }
    return ownedArtworks
}

export const getCreatedArtworks = function ( slug ) {
    let createdArtworks = []
    for (let artwork_index = 0; artwork_index < artworks.length; artwork_index++) {
        if (artworks[artwork_index].created_by == slug) createdArtworks.push( artworks[artwork_index] )
    }
    return createdArtworks
}

export const getLinkedArtworks = function ( slug ) {
    let linkedArtworks = []
    for (let artwork_index = 0; artwork_index < artworks.length; artwork_index++) {
        if (artworks[artwork_index].linked_to == slug) linkedArtworks.push( artworks[artwork_index] )
    }
    return linkedArtworks
}

export const getUsers = function ( ) {
    return users
}

export const getUser = function ( slug ) {
    let user = null
    for (let user_index = 0; user_index < users.length; user_index++) {
        if (users[user_index].slug == slug) user = users[user_index]
    }
    return user
}

export const getUserFollowings = function ( slug ) {
    let user = null
    let userFollowings = []
    for (let user_index = 0; user_index < users.length; user_index++) {
        if (users[user_index].slug == slug) user = users[user_index]
    }
    if (user) {
        for (let following_index = 0; following_index < user.followings.length; following_index++) {
            for (let user_index = 0; user_index < users.length; user_index++) {
                if (users[user_index].slug == user.followings[following_index]) userFollowings.push(users[user_index])
            }
        }
    }
    return userFollowings
}

export const getUserFollowingsWithObject = function ( user ) {
    let userFollowings = []
    if (user) {
        for (let following_index = 0; following_index < user.followings.length; following_index++) {
            for (let user_index = 0; user_index < users.length; user_index++) {
                if (users[user_index].slug == user.followings[following_index]) userFollowings.push(users[user_index])
            }
        }
    }
    return userFollowings
}

export const getPriceFilters = function ( ) {
    return priceFilters
}

export const getActivities = function ( ) {
    return activities
}

export const getUserActivities = function ( user ) {
    let userActivities = []
    for (let activity_index = 0; activity_index < activities.length; activity_index++) {
        if (activities[activity_index].user == user) userActivities.push(activities[activity_index])
    }
    return userActivities
}

export const getActivitiesTags = function ( activities ) {
    let tags = []
    for (let activity_index = 0; activity_index < activities.length; activity_index++) {
        tags = unionArray(tags, activities[activity_index].tags);
    }
    return tags
}

/* Math Functions */
export const priceFormat = function ( price ) {
    return parseFloat(price).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

export const getDateTime = function ( datetime, format = '%m/%d/%y, %h/%i %A' ) {
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    let date = String(datetime).split(' ');
    let ymd = String(date[0]).split('-');
    let his = String(date[1]).split(':');
    let year = parseInt(ymd[0])
    let month = parseInt(ymd[1] - 1)
    let day = parseInt(ymd[2])
    let hour = parseInt(his[0])
    let minute = parseInt(his[1])
    let second = parseInt(his[2])
    return format.replace('%m', month).replace('%M', months[month - 1]).replace('%d', day).replace('%y', year).replace('%h', hour > 12 ? hour - 12 : hour == 0 ? 12 : hour).replace('%i', minute).replace('%A', hour > 12 ? 'PM' : 'AM').replace('%a', hour > 12 ? 'pm' : 'am')
}