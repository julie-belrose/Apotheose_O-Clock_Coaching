const Theme = require('../models/theme');

const themeController = {
    /**
    * Controls endpoint GET /v1/api/admin/themes
    */
    getAllThemes: async (_, res) => {
   
        try{
            /* *
             * All the themes are retrieved from the database
             */
            const theThemes = await Theme.findAll();
            res.status(200).json(theThemes);

        } catch (err) {
            /**
            * There are no themes in the database
            * In the model, there is an error with a custom message
            */
            res.status(404).json(err.message);
        };

    },


    /**
    * Controls endpoint GET /v1/api/admin/themes/:id
    */
    getOneTheme: async (req, res) => {

        try {
            /**
             * We get the id in the parameters of the request
             */
            const { id } = req.params;

            const onlyOneTheme = await Theme.findOne(id);

            if(onlyOneTheme){
                res.status(200).json(onlyOneTheme);   
            } 

        } catch( err) {
            /**
            * There is no this theme in the database
            * In the model, there is an error with a custom message
            */
            res.status(404).json(err.message);
        };
    },


    /**
    * Controls endpoint POST /v1/api/admin/themes/:themeId
    */
    changeTheme: async (req, res) => {
        try {  
            
            // recuperation of id une request 
            const {themeId} = req.params; 
            // verify if theme exists in the database
            const theme = await Theme.findOne(themeId);
    
                if (!theme) {
                    res.status(404).json(err.message);

                } else {
                    // recuperation of infos body if id exists
                    const { themeId, title, description } = req.body;
                
                    if (themeId) {
                        theme.id = themeId; 
                    }
                    //replace title if new modification
                    if (title) {
                        theme.title = title;
                    }
                    // replace description if new description 
                    if (description) {
                        theme.description = description;
                    }
                    
                    // execute methode update in the model Theme
                    await theme.update();
                    res.status(200).json(theme);
                  
                }
            }

            catch(err) {
                res.status(404).json(err.message);
            }    
    },


    /**
    * Controls endpoint POST /v1/api/admin/themes
    */
    addNewTheme: async (req, res) => {
        try {  
            // We get the body parameters of the request from req.body
            const { title, description } = req.body;

            // we check that all parameters have been passed on and add any errors to an array
            let bodyErrors = [];

            if (!title) {
               bodyErrors.push(`le titre ne peut pas être vide`);
            }
            if (!description) {
               bodyErrors.push(`La description ne peut pas être vide`);
            }

            // if there are any errors, we return them
            if (bodyErrors.length) {
                res.status(400).json(bodyErrors);
            } else {
                // if there are no errors, we can save this new record in the database
                // For this v1, we don't handle the position, so we hard-code it for now as it should be NOT NULL
                const newTheme = new Theme({ title, description, 'position': 0 });
                await newTheme.save();
                res.status(200).json(newTheme);
            }

        } catch (err) {
            res.status(500).json(err.message);
        }
    },



    /**
    * Controls endpoint GET /v1/api/admin/themes/:id
    */
   deleteTheme: async (req, res) => {

    try {
        /**
         * We get the id in the parameters of the request
         */
        const { themeId } = req.params;
        // verify theme id is exists in the database
        const theme = await Theme.findOne(themeId);

        if(!theme){
            res.status(404).send(`id do not exists`);
        }else {
        // active methode async delete in the model theme
        const  deleteTheme = await theme.delete();
        res.status(200).json(deleteTheme);
    }
    } catch(err) {
        /**
        * There is no this theme in the database
        * In the model, there is an error with a custom message
        */
        res.status(404).json(err.message);
    }
},

    /**
    * Controls endpoint GET v1/api/students/:userId/themes/:themeId/score
    */
    getScoreOfOneThemeOfOneUser: async(req,res) =>{
        try{
            const { themeId, userId } = req.params;

            const score = await Theme.findTheScoreOfOneThemeOfOneUser(themeId, userId);
            res.status(200).json(score);
        }
        catch(err){

            res.status(400).json(err.message);
        };
    }

};

module.exports = themeController;