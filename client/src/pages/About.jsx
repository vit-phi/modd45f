// src/pages/About.js
import React from 'react';

function About() {
    const styles = {
        container: {
            padding: '20px',
            fontFamily: 'Arial, sans-serif',
            backgroundColor: '#f9f9f9',
        },
        title: {
            textAlign: 'center',
            fontSize: '2em',
            color: '#333',
            marginBottom: '20px',
        },
        list: {
            listStyle: 'none',
            padding: 0,
        },
        item: {
            marginBottom: '20px',
            padding: '15px',
            backgroundColor: '#fff',
            borderRadius: '8px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        },
        name: {
            fontSize: '1.5em',
            color: '#555',
            marginBottom: '10px',
        },
        detail: {
            fontSize: '1em',
            color: '#666',
        },
        link: {
            color: '#007bff',
            textDecoration: 'none',
        },
        linkHover: {
            textDecoration: 'underline',
        },
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>About Us</h1>
            <ul style={styles.list}>
                <li style={styles.item}>
                    <h2 style={styles.name}>วรณัฐ สุนันทวนิช</h2>
                    <p style={styles.detail}>รหัสนักศึกษา: 6652300842</p>
                    <p style={styles.detail}>GitHub: <a href="https://github.com/Rinnosuka" target="_blank" rel="noopener noreferrer" style={styles.link}>https://github.com/Rinnosuka</a></p>
                    <p style={styles.detail}>Resume: <a href="https://rinnosuka.github.io/resume1.2/" target="_blank" rel="noopener noreferrer" style={styles.link}>https://rinnosuka.github.io/resume1.2/</a></p>
                </li>
                <li style={styles.item}>
                    <h2 style={styles.name}>วิศณุ พิมานรัมย์</h2>
                    <p style={styles.detail}>รหัสนักศึกษา: 6652300796</p>
                    <p style={styles.detail}>GitHub: <a href="https://github.com/vit-phi" target="_blank" rel="noopener noreferrer" style={styles.link}>https://github.com/vit-phi</a></p>
                    <p style={styles.detail}>Resume: <a href="https://vit-phi.github.io/Resume.V1/" target="_blank" rel="noopener noreferrer" style={styles.link}>https://vit-phi.github.io/Resume.V1/</a></p>
                </li>
                <li style={styles.item}>
                    <h2 style={styles.name}>รพีภัทร คณะพล</h2>
                    <p style={styles.detail}>รหัสนักศึกษา: 6652300681</p>
                    <p style={styles.detail}>GitHub: <a href="https://github.com/FILMVOG" target="_blank" rel="noopener noreferrer" style={styles.link}>https://github.com/FILMVOG</a></p>
                    <p style={styles.detail}>Resume: <a href="https://filmvog.github.io/Resume1.0/" target="_blank" rel="noopener noreferrer" style={styles.link}>https://filmvog.github.io/Resume1.0/</a></p>
                </li>
                <li style={styles.item}>
                    <h2 style={styles.name}>กนกพล ศรีโสพล</h2>
                    <p style={styles.detail}>รหัสนักศึกษา: 6652300699</p>
                    <p style={styles.detail}>GitHub: <a href="https://github.com/Bomzap220548" target="_blank" rel="noopener noreferrer" style={styles.link}>https://github.com/Bomzap220548</a></p>
                    <p style={styles.detail}>Resume: <a href="https://bomzap220548.github.io/My--Resume/" target="_blank" rel="noopener noreferrer" style={styles.link}>https://bomzap220548.github.io/My--Resume/</a></p>
                </li>
                <li style={styles.item}>
                    <h2 style={styles.name}>ภานุเดช สุทธิวงศ์</h2>
                    <p style={styles.detail}>รหัสนักศึกษา: 6652300443</p>
                    <p style={styles.detail}>GitHub: <a href="https://github.com/9Panudet" target="_blank" rel="noopener noreferrer" style={styles.link}>https://github.com/9Panudet</a></p>
                    <p style={styles.detail}>Resume: <a href="https://9panudet.github.io/resume/" target="_blank" rel="noopener noreferrer" style={styles.link}>https://9panudet.github.io/resume/</a></p>
                </li>
            </ul>
        </div>
    );
}

export default About;