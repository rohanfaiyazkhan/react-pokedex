import { NetworkCacheContextWrapper } from "./NetworkCacheLayer/NetworkCacheContext";

function ContextWrappers(props) {
    return (
        <NetworkCacheContextWrapper>
            {props.children}
        </NetworkCacheContextWrapper>
    );
}

export default ContextWrappers;
