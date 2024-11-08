import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { requestUsers, setCurrentPage } from "../../Redux/movies-reducer";
import Releases from "./Releases/Releases";
import Paginator from "./Pagination/Pagination";

const ReleasesContainer = () => {
    const dispatch = useDispatch();

    const posters = useSelector((state) => state.moviesPage.posters);
    const currentPage = useSelector((state) => state.moviesPage.currentPage);
    const totalMoviesCount = useSelector((state) => state.moviesPage.totalMoviesCount);
    const pageSize = useSelector((state) => state.moviesPage.pageSize);
    const loading = useSelector((state) => state.moviesInfoPage.loading); // Получаем состояние загрузки

    useEffect(() => {
        dispatch(requestUsers(currentPage));
    }, [dispatch, currentPage]);

    const onPageChange = (pageNumber) => {
        dispatch(setCurrentPage(pageNumber));
        dispatch(requestUsers(pageNumber));
    };
    
    return (
        <>
            <Releases posters={posters} loading={loading} /> {/* Передаем состояние загрузки в Releases */}
            <Paginator
                totalMoviesCount={totalMoviesCount}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={onPageChange}
            />
        </>
    );
};

export default ReleasesContainer;