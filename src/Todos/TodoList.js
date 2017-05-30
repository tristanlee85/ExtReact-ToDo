import React from 'react';
import { List } from '@extjs/ext-react';
import { Provider, connect } from 'react-redux';
import { removeTodo } from '../actions';

Ext.require([
    'Ext.dataview.listswiper.ListSwiper',
    'Ext.dataview.listswiper.Stepper'
]);

function TodoList({ todos, dispatch }) {

    return (
        <List store={todos} itemTpl="{todo}"
            plugins={[{
                type: 'listswiper',
                defaults: {
                    ui: 'action'
                },
                widget: {
                    xtype: 'listswiperstepper'
                },
                right: [{
                    iconCls: 'x-fa fa-delete',
                    text: 'Delete',
                    commit: (comp, info) => dispatch(removeTodo(info.record)),
                }]
            }]}
        />
    )
}

export default connect((state) => {return {todos: state.store}})(TodoList);