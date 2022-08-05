<script>
    import TodoItem from "$lib/todoItem.svelte";
    const title = "Todos";
</script>

<svelte:head>
    <title>{title}</title>
</svelte:head>

<div class="todos">
    <h1>{title}</h1>

    <form action="" method="" class="new">
        <input
            type="text"
            name="text"
            aria-label="Add a todo"
            placeholder="+ tap to add a todo"
        />
    </form>

    <TodoItem />
    <TodoItem />
    <TodoItem />
</div>

<style>
    .todos {
        width: 100%;
        max-width: 42rem;
        margin: 4rem auto 0 auto;
    }
    .new {
        margin: 0 0 0.5rem 0;
    }

    .new input {
        font-size: 2em;
        width: 100%;
        padding: 0.5rem 1rem 0.3rem 1rem;
        box-sizing: border-box;
        background: rgba(255, 255, 255, 0.05);
        border-radius: 8px;
        text-align: center;
    }

    .todos :global(input) {
        border: 1px solid transparent;
    }

    .todos :global(input:focus-visible) {
        box-shadow: inset 1px 1px 6px rgba(0, 0, 0, 0.1);
        border: 1px solid #ff3e00;
        outline: none;
    }
</style>
