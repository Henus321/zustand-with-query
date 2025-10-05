import { ROUTES } from "@/config";

import PageHead from "@/components/PageHead";
import Form from "./components/Form";
import Grid from "./components/Grid";
import Actions from "./components/Actions";

const Recipes = () => {
    return (
        <div>
            <PageHead title={ROUTES.recipes.label} />
            <Actions />
            <Form />
            <Grid />
        </div>
    );
};

export default Recipes;
