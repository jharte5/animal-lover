import React, { Component } from 'react'
import { findByLabelText } from '@testing-library/react';

let animals = [
    {
        image:'./images/pup1.jpg',
        type:'puppy',
        name:'cinnamon',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis eros non diam congue porttitor sit amet ut dui. Nam arcu nisl, suscipit non lacinia ut, venenatis eget ex. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec a pulvinar odio. Ut at enim mi. Nunc nec mattis purus. Curabitur pharetra dignissim mi a accumsan. Vestibulum non placerat nisl. Suspendisse consequat pharetra neque, ac lobortis nunc laoreet eu. Nullam efficitur nec justo nec lacinia. Nam pretium nunc non lectus bibendum vehicula.',
        animalId:'7h9r4',

    },
    {
        image:'./images/pup2.jpg',
        type:'puppy',
        name:'sugar pie',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis eros non diam congue porttitor sit amet ut dui. Nam arcu nisl, suscipit non lacinia ut, venenatis eget ex. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec a pulvinar odio. Ut at enim mi. Nunc nec mattis purus. Curabitur pharetra dignissim mi a accumsan. Vestibulum non placerat nisl. Suspendisse consequat pharetra neque, ac lobortis nunc laoreet eu. Nullam efficitur nec justo nec lacinia. Nam pretium nunc non lectus bibendum vehicula.',
        animalId:'7h9dw',

    },
    {
        image:'./images/pup3.jpg',
        type:'puppy',
        name:'goldie',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis eros non diam congue porttitor sit amet ut dui. Nam arcu nisl, suscipit non lacinia ut, venenatis eget ex. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec a pulvinar odio. Ut at enim mi. Nunc nec mattis purus. Curabitur pharetra dignissim mi a accumsan. Vestibulum non placerat nisl. Suspendisse consequat pharetra neque, ac lobortis nunc laoreet eu. Nullam efficitur nec justo nec lacinia. Nam pretium nunc non lectus bibendum vehicula.',
        animalId:'8jrh7',

    },
    {
        image:'./images/pup4.jpg',
        type:'puppy',
        name:'spot',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis eros non diam congue porttitor sit amet ut dui. Nam arcu nisl, suscipit non lacinia ut, venenatis eget ex. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec a pulvinar odio. Ut at enim mi. Nunc nec mattis purus. Curabitur pharetra dignissim mi a accumsan. Vestibulum non placerat nisl. Suspendisse consequat pharetra neque, ac lobortis nunc laoreet eu. Nullam efficitur nec justo nec lacinia. Nam pretium nunc non lectus bibendum vehicula.',
        animalId:'j89dd',

    },
    {
        image:'./images/kitten1.jpg',
        type:'kitten',
        name:'trips',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis eros non diam congue porttitor sit amet ut dui. Nam arcu nisl, suscipit non lacinia ut, venenatis eget ex. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec a pulvinar odio. Ut at enim mi. Nunc nec mattis purus. Curabitur pharetra dignissim mi a accumsan. Vestibulum non placerat nisl. Suspendisse consequat pharetra neque, ac lobortis nunc laoreet eu. Nullam efficitur nec justo nec lacinia. Nam pretium nunc non lectus bibendum vehicula.',
        animalId:'j89f3',

    },
    {
        image:'./images/kitten2.jpg',
        type:'kitten',
        name:'harmony',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis eros non diam congue porttitor sit amet ut dui. Nam arcu nisl, suscipit non lacinia ut, venenatis eget ex. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec a pulvinar odio. Ut at enim mi. Nunc nec mattis purus. Curabitur pharetra dignissim mi a accumsan. Vestibulum non placerat nisl. Suspendisse consequat pharetra neque, ac lobortis nunc laoreet eu. Nullam efficitur nec justo nec lacinia. Nam pretium nunc non lectus bibendum vehicula.',
        animalId:'8j933',

    },
    {
        image:'./images/kitten3.jpg',
        type:'kitten',
        name:'big ear',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis eros non diam congue porttitor sit amet ut dui. Nam arcu nisl, suscipit non lacinia ut, venenatis eget ex. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec a pulvinar odio. Ut at enim mi. Nunc nec mattis purus. Curabitur pharetra dignissim mi a accumsan. Vestibulum non placerat nisl. Suspendisse consequat pharetra neque, ac lobortis nunc laoreet eu. Nullam efficitur nec justo nec lacinia. Nam pretium nunc non lectus bibendum vehicula.',
        animalId:'g67e3',

    },
    {
        image:'./images/kitten4.jpg',
        type:'kitten',
        name:'rascal',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis eros non diam congue porttitor sit amet ut dui. Nam arcu nisl, suscipit non lacinia ut, venenatis eget ex. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec a pulvinar odio. Ut at enim mi. Nunc nec mattis purus. Curabitur pharetra dignissim mi a accumsan. Vestibulum non placerat nisl. Suspendisse consequat pharetra neque, ac lobortis nunc laoreet eu. Nullam efficitur nec justo nec lacinia. Nam pretium nunc non lectus bibendum vehicula.',
        animalId:'n83de',

    },
    {
        image:'./images/monkey1.jpg',
        type:'monkey',
        name:'george',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis eros non diam congue porttitor sit amet ut dui. Nam arcu nisl, suscipit non lacinia ut, venenatis eget ex. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec a pulvinar odio. Ut at enim mi. Nunc nec mattis purus. Curabitur pharetra dignissim mi a accumsan. Vestibulum non placerat nisl. Suspendisse consequat pharetra neque, ac lobortis nunc laoreet eu. Nullam efficitur nec justo nec lacinia. Nam pretium nunc non lectus bibendum vehicula.',
        animalId:'h873d',

    },
    {
        image:'./images/monkey2.jpg',
        type:'monkey',
        name:'ronald',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis eros non diam congue porttitor sit amet ut dui. Nam arcu nisl, suscipit non lacinia ut, venenatis eget ex. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec a pulvinar odio. Ut at enim mi. Nunc nec mattis purus. Curabitur pharetra dignissim mi a accumsan. Vestibulum non placerat nisl. Suspendisse consequat pharetra neque, ac lobortis nunc laoreet eu. Nullam efficitur nec justo nec lacinia. Nam pretium nunc non lectus bibendum vehicula.',
        animalId:'j89r3',

    },
    {
        image:'./images/monkey3.jpg',
        type:'monkey',
        name:'patrick',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis eros non diam congue porttitor sit amet ut dui. Nam arcu nisl, suscipit non lacinia ut, venenatis eget ex. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec a pulvinar odio. Ut at enim mi. Nunc nec mattis purus. Curabitur pharetra dignissim mi a accumsan. Vestibulum non placerat nisl. Suspendisse consequat pharetra neque, ac lobortis nunc laoreet eu. Nullam efficitur nec justo nec lacinia. Nam pretium nunc non lectus bibendum vehicula.',
        animalId:'nu98d',

    },
    {
        image:'./images/monkey4.jpg',
        type:'monkey',
        name:'jesus',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis eros non diam congue porttitor sit amet ut dui. Nam arcu nisl, suscipit non lacinia ut, venenatis eget ex. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec a pulvinar odio. Ut at enim mi. Nunc nec mattis purus. Curabitur pharetra dignissim mi a accumsan. Vestibulum non placerat nisl. Suspendisse consequat pharetra neque, ac lobortis nunc laoreet eu. Nullam efficitur nec justo nec lacinia. Nam pretium nunc non lectus bibendum vehicula.',
        animalId:'j89d3',

    },


]

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

    onDelete(id){
        const updateAnimals = this.state.animals.filter((item) => item.animalId !== id);
        // this is how to update your state
        this.setState({animals: updateAnimals});
        console.log('Delete item with id:', id);
    }

    render() {
        return (
            <div style={{
                display: 'flex'
            }}>
                <div style={{display: 'flex', flexWrap: 'wrap',}}>
                {this.state.animals.map(({image, type, name, description, animalId},i) => {
                    return(
                        <div className="ui card" style={{
                            margin:'20px'
                        }}>
                        <div className='image'>
                            <img src={image}/>
                        </div>
                        <div>
                            <div>{type}</div>
                            <div>{name}</div>
                            <div className="description">{description}</div>
                            <div>{animalId}</div>
                        </div>
                        <div>
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
                                return this.onDelete(animalId);
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
                                        src={item.image}/>
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
                                        src={item.image}/>
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
