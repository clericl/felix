import React from 'react';

class Page extends React.Component {
    constructor(props) {
        super(props)
    };

    render() {
        return (
            <>
                <Header />
                <Section />
                <Footer />
            </>
        )
    };
};

export default Page;