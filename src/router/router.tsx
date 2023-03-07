import { createBrowserRouter } from "react-router-dom";
import { GeneralPage, ErrorPage, PeoplePage, StarshipsPage, PlanetsPage } from '../routes';

const router = createBrowserRouter([
    {
        path: '/', 
        element: <GeneralPage/>, 
        errorElement: <ErrorPage/>, 
        children: [
            {
                path: '/people',
                element: <PeoplePage/>
            },
            {
                path: '/starships',
                element: <StarshipsPage/>
            },
            {
                path: '/planets',
                element: <PlanetsPage/>
            },
        ]
    }
]);

export default router;