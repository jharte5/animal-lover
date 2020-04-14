import React, { Component } from 'react'
import { findByLabelText } from '@testing-library/react';
import Search from './Search'
import {animals} from '../data/data'



export default class Animals extends Component {
    constructor() {
        super();
        this.state = {
            animals,
            animal: {
                image:'',
                type:'',
                name:'',
                description:'',
                animalId:''
            },
            likes:[],
            dislikes:[]
        }
    }

    onLike(id){
        const likeAnimals = this.state.animals.filter((item) => item.animalId === id);

        console.log(likeAnimals)
        const newLikes = [...this.state.likes]
        if (!newLikes.includes(likeAnimals[0])){
            newLikes.push(likeAnimals[0])
        }
        this.setState({likes: newLikes}, () => {
            console.log(this.state.likes)
        })
    }

    onDislike(id){
        const likeAnimals = this.state.animals.filter((item) => item.animalId === id);

        console.log(likeAnimals)
        const unLikes = [...this.state.dislikes]
        if (!unLikes.includes(likeAnimals[0])){
            unLikes.push(likeAnimals[0])
        }
        this.setState({dislikes: unLikes}, () => {
            console.log(this.state.likes)
        })
    }

    onDeleteAll(id){
        const updateAnimals = this.state.animals.filter((item) => item.animalId !== id);
        const updateLikes = this.state.likes.filter((item) => item.animalId !== id);
        const updateDislikes = this.state.dislikes.filter((item) => item.animalId !== id);

        // this is how to update your state
        this.setState({animals: updateAnimals, likes: updateLikes, dislikes: updateDislikes});
        console.log('Delete item with id:', id);
    }

    onDeleteLike(id){
        const updateLikes = this.state.likes.filter((item) => item.animalId !== id);
        this.setState({likes: updateLikes})
    }
    
    onDeleteDislike(id){
        const updateDislikes = this.state.dislikes.filter((item) => item.animalId !== id);
        this.setState({dislikes: updateDislikes})
    }

    searchBar = (event) => {
        this.setState({search: event.target.value})
    }

    render() {
        return (
            <div style={{
                display: 'flex'
            }}>
                <div style={{display: 'flex', flexWrap: 'wrap',}}>
                {this.state.animals.map(({image, type, name, description, animalId},i) => {
                    return(
                        
                        <Search 
                        search={this.state.search} 
                        searchBar={this.searchBar} />
                        <div className="ui card" style={{
                        //     margin:'20px'
                        // }}>
                        // <div className='image'>
                        //     <img src={image}/>
                        // </div>
                        // <div>
                        //     <div>{type}</div>
                        //     <div>{name}</div>
                        //     <div className="description">{description}</div>
                        //     <div>{animalId}</div>
                        // </div>
                        // <div>
                            <button
                            onClick={()=> {
                                return this.onLike(animalId)
                            }}
                            >Like</button>
                            <button
                            onClick={()=>{
                                return this.onDislike(animalId)
                            }}>Dislike</button>
                            <button
                            className="ui primary button"
                            style={{ margin: '10px 15px'}}
                            onClick={() => {
                                return this.onDeleteAll(animalId);
                            }}
                            >Discard</button>
                        </div>
                        
                    </div>
                    )})
                }
            </div>
            <div>
                <div >
                    <div>
                        <h2>Likes</h2>
                        {this.state.likes.map(item => {
                            return(
                                <div>
                                    <div>
                                        <img 
                                        style={{width: '150px',height:'150px'}}
                                        src={item.image}
                                        onClick={() => {
                                            return this.onDeleteLike(item.animalId);
                                        }}/>
                                        {item.name}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div>
                        <h2>Dislikes</h2>
                        {this.state.dislikes.map(item => {
                            return(
                                <div>
                                    <div>
                                        <img style={{width: '150px', height: '150px'}} 
                                        src={item.image}
                                        onClick={() => {
                                            return this.onDeleteDislike(item.animalId);
                                        }}/>
                                        {item.name}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
        )
}}
