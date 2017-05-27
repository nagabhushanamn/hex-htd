$(function () {

    let apiUrl = "http://localhost:3000/api/stories";
    let data = [];

    $.ajax(apiUrl, {
        success: function (resp) {
            data = resp;
            renderAllStories(data);
        }
    });

    //--------------------------------------------------------

    let btn = $('#toggle-form-btn');
    let storyFormPanel = $(btn).next();
    let storyForm = $("#story-form", storyFormPanel);
    let allStoriesListGroup = $("#all-stories .list-group");
    let isOpen = false;

    //--------------------------------------------------------

    function renderStory(story) {
        let storyTemplate = `
                <div class="list-group-item">
                        <blockquote>
                            <div class="story">
                                <span class="badge">${story.name}</span>
                                <hr/>
                                <p>${story.storyText}</p>
                            </div>
                            <button class="btn btn-sm btn-default pull-right">delete</button>
                        </blockquote>
                </div>
            `
        return storyTemplate;
    }

    function renderAllStories(stories) {
        let all = [];
        stories.reverse().forEach(function (story) {
            all.push(renderStory(story));
        });
        allStoriesListGroup.append(all.join(" "));
    }


    //--------------------------------------------------------

    btn.click(function (event) {
        storyFormPanel.toggle("slow");
        isOpen = !isOpen;
        (isOpen) ? btn.text('Hide'): btn.text('New Story');
    });

    //--------------------------------------------------------

    storyForm.on('submit', function (event) {

        event.preventDefault();

        let nameField = $('input', storyForm);
        let storyField = $('textArea', storyForm);

        let name = nameField.val();
        let storyText = storyField.val();

        //--------------------------------------------------------------
        if (name === "") {

            nameField.closest('div')
                .addClass('has-error')
                .end().focus()
                .after($('<div class="help-block">Name is Required</div>'));

            // nameField.one('keyup', function (e) {
            //     console.log('keyup-event');
            //     $(this)
            //         .closest('div')
            //         .removeClass('has-error')
            //         .find('div.help-block')
            //         .remove();
            // });

            return;
        }

        //--------------------------------------------------------------

        let newStory = {
            name,
            storyText
        };

        $.ajax(apiUrl, {
            method: 'POST',
            "contentType": "application/json",
            data: JSON.stringify(newStory),
            success: function (story) {
                
                allStoriesListGroup.prepend(renderStory(newStory));

                nameField.val("");
                storyField.val("");

                storyFormPanel.hide();
                btn.text('New Story');

            }
        });

        //--------------------------------------------------------------

    })


});