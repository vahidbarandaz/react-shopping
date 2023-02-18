import Skeleton from "react-loading-skeleton"
import 'react-loading-skeleton/dist/skeleton.css'

const Loading = () => {
    return Array(6).fill({}).map(()=>{
        return(
            <div className="col-4 col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12 text-center zindex p-5">
                <Skeleton className="mb-2" width={340} height={150}></Skeleton>
                <Skeleton className="mb-2" height={20} width={340}  count={2}></Skeleton>
            </div>
        )
    })
}
 
export default Loading;
