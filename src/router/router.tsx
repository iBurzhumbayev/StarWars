import { createBrowserRouter } from "react-router-dom";
import { GeneralPage, ErrorPage, PeoplePage, StarshipsPage, PlanetsPage, SingleCharPage, SinglePlanetPage, SingleStarshipPage } from '../routes';

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
            {
                path: '/people/:charId',
                element: <SingleCharPage/>
            },
            {
                path: '/starships/:starshipId',
                element: <SingleStarshipPage/>
            },
            {
                path: '/planets/:planetId',
                element: <SinglePlanetPage/>
            },
        ]
    }
]);

export default router;