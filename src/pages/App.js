import { ApolloProvider } from '@apollo/client';
import client from './apolloClient';
import RegistrationForm from './RegistrationForm';

function App() {
    return (
        <ApolloProvider client={client}>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3 text-center">
                        <h1 className="mb-4">Registration Form</h1>
                        <RegistrationForm />
                    </div>
                </div>
            </div>
        </ApolloProvider>
    );
}

export default App;
