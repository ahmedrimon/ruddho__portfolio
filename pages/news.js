import Link from 'next/link'

const News = () => {
    return (
        <div>
            <h1>Here is important News</h1>
            <ul>
                <li><Link href="/news/important__thing">Just Click Bad Boy</Link></li>
            </ul>
        </div>
    );
};

export default News;