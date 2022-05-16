/*
 * This is a test class and it's not meant for production.
 */

import React from "react";

interface requiredProps {
    children: React.ReactNode;
};

interface optionalProps {
    min: string;
};

interface Props extends requiredProps, optionalProps {};

const defaultProps: optionalProps = {
    min: "m-0",
};

export default class Section extends React.Component<Props> {
    static defaultProps: optionalProps;

    render() {

        return (
            <div className={this.props.min}>
                {this.props.children}
            </div>
        );
    }
}

Section.defaultProps = defaultProps;