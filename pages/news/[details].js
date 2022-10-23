import { useRouter } from 'next/router'

const DynamicNews = () => {

    const router = useRouter()

    console.log(router.query.details)

    return (
        <div>
            <h2>This is detail Page</h2>
        </div>
    );
};

export default DynamicNews;