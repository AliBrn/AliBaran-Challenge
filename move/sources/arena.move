module challenge::arena;

use challenge::hero::Hero;
use sui::event;

// ========= STRUCTS =========

public struct Arena has key, store {
    id: UID,
    warrior: Hero,
    owner: address,
}

// ========= EVENTS =========

public struct ArenaCreated has copy, drop {
    arena_id: ID,
    timestamp: u64,
}

public struct ArenaCompleted has copy, drop {
    winner_hero_id: ID,
    loser_hero_id: ID,
    timestamp: u64,
}

// ========= FUNCTIONS =========

public fun create_arena(hero: Hero, ctx: &mut TxContext) {

    // TODO: Create an arena object
    let arena = Arena {
        id: object::new(ctx),       // Hint: Use object::new(ctx)
        warrior: hero,              // Hint: Set warrior field
        owner: ctx.sender()         // Hint: Set owner to ctx.sender()
    };

    // TODO: Emit ArenaCreated event
    event::emit(ArenaCreated {
        arena_id: object::id(&arena), // Hint: object::id(&arena)
        timestamp: ctx.epoch_timestamp_ms() // Hint: ctx.epoch_timestamp_ms()
    });

    // TODO: Use transfer::share_object() to make it publicly tradeable
    transfer::share_object(arena);
}

#[allow(lint(self_transfer))]
public fun battle(hero: Hero, arena: Arena, ctx: &mut TxContext) {
    
    // TODO: Implement battle logic
    let Arena { id, warrior, owner } = arena;

    // DÜZELTME: Sahiplik devredilmeden ÖNCE ID'leri alıyoruz.
    let hero_id = object::id(&hero);
    let warrior_id = object::id(&warrior);

    // TODO: Compare hero.hero_power() with warrior.hero_power()
    if (hero.hero_power() > warrior.hero_power()) {
        // Şimdi sahipliği güvenle devredebiliriz.
        transfer::public_transfer(hero, ctx.sender());
        transfer::public_transfer(warrior, ctx.sender());

        event::emit(ArenaCompleted {
            // DÜZELTME: Önceden kaydettiğimiz ID'leri kullanıyoruz.
            winner_hero_id: hero_id,
            loser_hero_id: warrior_id,
            timestamp: ctx.epoch_timestamp_ms()
        });
    } else {
        // Şimdi sahipliği güvenle devredebiliriz.
        transfer::public_transfer(hero, owner);
        transfer::public_transfer(warrior, owner);

        event::emit(ArenaCompleted {
            // DÜZELTME: Önceden kaydettiğimiz ID'leri kullanıyoruz.
            winner_hero_id: warrior_id,
            loser_hero_id: hero_id,
            timestamp: ctx.epoch_timestamp_ms()
        });
    };
    
    // TODO: Delete the battle place ID 
    object::delete(id);
}

