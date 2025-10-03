import PageHead from "@/components/PageHead";
import { ROUTES } from "@/config";

const Todos = () => {
    return (
        <div>
            <PageHead title={ROUTES.todos.label} />
        </div>
    );
};

export default Todos;
