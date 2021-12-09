import React from 'react';

function SearchForm() {
    return (
        <div className="header-icon header-search header-search-inline header-search-category w-lg-max text-right mt-0 d-xl-block d-none">
            <a href="#" className="search-toggle" role="button"><i className="icon-search-3"></i></a>
            <form action="#" method="get">
                <div className="header-search-wrapper">
                    <button className="btn border-0 p-0" title="search" type="submit">
                        <svg viewBox="0 0 16 16" fill="none" width="16" height="16" className="sc-bdnxRM sc-hKFxyN hOiKLt"><path fillRule="evenodd" clipRule="evenodd" d="M2 7C2 4.23858 4.23858 2 7 2C9.76142 2 12 4.23858 12 7C12 9.76142 9.76142 12 7 12C4.23858 12 2 9.76142 2 7ZM7 0C3.13401 0 0 3.13401 0 7C0 10.866 3.13401 14 7 14C8.57591 14 10.0302 13.4792 11.2001 12.6004C11.2281 12.6376 11.259 12.6733 11.2929 12.7071L14.2929 15.7071C14.6834 16.0976 15.3166 16.0976 15.7071 15.7071C16.0976 15.3166 16.0976 14.6834 15.7071 14.2929L12.7071 11.2929C12.6733 11.259 12.6376 11.2281 12.6004 11.2001C13.4792 10.0302 14 8.57591 14 7C14 3.13401 10.866 0 7 0Z" fill="currentColor"></path></svg>
                    </button>

                    <input type="text" className="form-control" placeholder="Collection, item or user"  required />                   
                </div>
            </form>
        </div>
    );
}

export default SearchForm;