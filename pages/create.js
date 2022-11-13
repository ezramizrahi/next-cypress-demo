import axios from 'axios';
import PageLayout from '../components/PageLayout';
import FilmForm from '../components/FilmForm';

const Create = () => {
    const addFilm = (data) => axios.post('/api/films', data);
    return (
        <PageLayout>
            <div className="max-w-screen-sm mx-auto">
                <h1 className="text-xl font-medium text-gray-800">Add a film</h1>
                <p className="text-gray-500">
                    Fill out the form below to add a film.
                </p>
                <div className="mt-8">
                    <FilmForm
                        buttonText='Add film'
                        redirectPath='/'
                        onSubmit={addFilm}
                    />
                </div>
            </div>
        </PageLayout>
    )
};

export default Create;