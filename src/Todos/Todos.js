import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import TodoList from './TodoList';
import { Container, Button, TextField, Toolbar } from '@extjs/ext-react';
import { addTodo, updateTodo } from '../actions';

function Todos({ todos, value, dispatch }) {
    const phone = 'width <= 600',
        desktop = 'width > 600';

    return (
        <Container layout="vbox">
            <Toolbar
                docked="top">
                    <TextField

                        plugins="responsive"
                        responsiveConfig={{
                            [phone]: {
                                flex: 1
                            },
                            [desktop]: {
                                flex: 0
                            }
                        }}
                        minWidth={200}
                        placeholder="TODO..."
                        value={value}
                        onChange={(field, value) => dispatch(updateTodo(field, value))} />
                    <Button
                        plugins="responsive"
                        responsiveConfig={{
                            [phone]: {
                                iconCls: 'x-fa fa-plus',
                                text: ''
                            },
                            [desktop]: {
                                iconCls: '',
                                text: 'Add ToDo'
                            }
                        }}
                        disabled={!value.length}
                        handler={() => dispatch(addTodo())}
                    />
            </Toolbar>
            <TodoList />
        </Container>
    )
}

const mapStateToProps = (state) => {
    return {
        todos: state.store,
        value: state.value
    }
}

export default connect(mapStateToProps)(Todos);