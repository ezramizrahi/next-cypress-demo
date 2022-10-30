import { useSession } from "next-auth/react";

export default function Films() {
    const { status } = useSession({
        required: true,
        // TODO:
        // determine what this does
        onUnauthenticated() {
          return <div>Not authenticated</div>;
        },
    });
    if (status === "loading") {
        return "Loading or not authenticated..."
    };
    return (
        <div>
            <div>user is logged in</div>
            <a href='https://www.youtube.com/watch?v=5qap5aO4i9A'>LoFi Music</a>
        </div>
    );
};