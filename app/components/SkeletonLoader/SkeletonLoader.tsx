import {FC} from "react";
import Skeleton, {SkeletonProps} from "react-loading-skeleton";

const SkeletonLoader: FC<SkeletonProps> = ({className, ...rest}) => {
    return (
        <Skeleton
            {...rest}
            baseColor="#727272"
            highlightColor="#888888"
            className={className}
        />
    );
};

export default SkeletonLoader;