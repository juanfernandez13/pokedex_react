import axios from "axios";
import { useState } from "react";

const baseUrl = 
    axios.create({
        baseURL:"https://pokeapi.co/api/v2/pokemon"
    })

export default baseUrl;