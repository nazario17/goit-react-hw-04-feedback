// import React from 'react';
// import css from './Section.module.css';
// import PropTypes from 'prop-types';

// export const Section = ({ title, children }) => {
//     return (<div className={css.section}>
//         <h2>{title}</h2>
//         {children}
//   </div>);
// };

// Section.propTypes = {
//     title: PropTypes.string.isRequired,
//     children: PropTypes.node.isRequired,
// }


import React from 'react';
import css from './Section.module.css';
import PropTypes from 'prop-types';

export const Section = ({ title, children }) => { 
    return (
      <div className={css.section}>
            <h2>{title}</h2>
            { children}
      </div>
    );
} 

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
}