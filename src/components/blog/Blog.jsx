import React from 'react'
import './Blog.css'

function Blog() {
    return (
        <main className="main-container">
            <article className="blog-post">
                <h1 className="blog-title">The Journey of Web Development</h1>
                <img
                    src="https://via.placeholder.com/800x400"
                    alt="Web Development"
                    className="blog-image"
                />
                <p className="blog-meta">Published on September 5, 2024, by John Doe</p>
                <section className="blog-content">
                    <p>
                        Web development has come a long way since its inception. From the early days of HTML and
                        CSS to the complex JavaScript frameworks we use today, the journey has been fascinating.
                        Developers have had to constantly adapt to new technologies, tools, and best practices.
                    </p>
                    <h2>1. The Early Days of HTML</h2>
                    <p>
                        Back in the 1990s, web pages were simple. They were mostly static, with basic HTML
                        structures and inline CSS. Websites had very limited interactivity, and most of the work was
                        done on the server side.
                    </p>
                    <h2>2. The Rise of JavaScript</h2>
                    <p>
                        The introduction of JavaScript in the late 1990s changed everything. For the first time,
                        developers could create dynamic content that interacted with users in real time without
                        reloading the page. This was the foundation for what we now know as modern web applications.
                    </p>
                    <blockquote>
                        "JavaScript is the language of the web, and it’s here to stay." — Brendan Eich
                    </blockquote>
                    <p>
                        JavaScript libraries and frameworks like React, Angular, and Vue.js have become essential tools
                        for modern web development, allowing developers to build complex and scalable applications
                        efficiently.
                    </p>
                </section>
            </article>
        </main>
    );
}

export default Blog
