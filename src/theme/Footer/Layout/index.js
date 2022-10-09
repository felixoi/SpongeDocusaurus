import React from 'react';
import clsx from 'clsx';
export default function FooterLayout({style, links, logo, copyright}) {
  return (
    <footer
      className={clsx('footer', {
        'footer--dark': style === 'dark',
      })}>
      <div className="container container-fluid">
        {(logo || copyright) && (
          <div className="footer__bottom text--center">
              <div className="font-size-90 margin-bottom--xs">{copyright}</div>
              <div className="font-size-80 license">
                  <a className="margin-right--sm license-img" rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">
                      <img alt="Creative Commons License"  src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" height="20" />
                  </a>
                  <div>
                      Except where otherwise noted,&nbsp;
                      <a href="https://github.com/SpongePowered/SpongeDocs">
                          SpongeDocs
                      </a>
                      &nbsp;is licensed under a&nbsp;
                      <a rel="license" href="https://creativecommons.org/licenses/by-sa/4.0/">
                          Creative Commons Attribution-ShareAlike 4.0 International License
                      </a>
                      .
                  </div>
              </div>
          </div>
        )}
      </div>
    </footer>
  );
}
