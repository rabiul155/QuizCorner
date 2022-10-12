import React from 'react';

const Blog = () => {
    return (
        <div className=' text-white'>
            <h1 className=' fw-bold bg-primary m-3 p-3 rounded-4'>Three random Question </h1>
            <div className=' bg-primary p-5 m-3 rounded-4'>
                <h4 className=' pb-3'>What is the purpose of reat router?</h4>
                <p>ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route</p>
            </div>
            <div className=' bg-primary p-5 m-3 rounded-4'>
                <h4 className=' pb-3' >How does context api work?</h4>
                <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
            </div>
            <div className=' bg-primary p-5 m-3 rounded-4'>
                <h4 className=' pb-3'>Details about custom Hook "useRef"</h4>
                <p>The useRef Hook allows you to persist values between renders.
                    It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.</p>
            </div>
        </div>
    );
};

export default Blog;