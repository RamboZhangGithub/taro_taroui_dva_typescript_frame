import classNames from 'classnames';
import React from 'react';
import { View } from '@tarojs/components';
export default class AtSwipeActionOptions extends React.Component {
    render() {
        const rootClass = classNames('at-swipe-action__options', this.props.className);
        return (React.createElement(View, { id: `swipeActionOptions-${this.props.componentId}`, className: rootClass, style: this.props.customStyle }, this.props.children));
    }
}
//# sourceMappingURL=index.js.map